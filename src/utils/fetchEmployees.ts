import { Employee, RawEmployee } from '../types/employee';

interface CacheData {
    employees: Employee[];
    timestamp: number;
}

let cache: CacheData | null = null;
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

async function fetchCsvData(): Promise<string> {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSGPDwCwGIuCGB3kkx_Fj2ixzOZaoRerf6pbxLpWmgfir7jKxJH-Kn8yoQqMq1zAE9hP7ZHEwVSrewp/pub?output=csv');
    return response.text();
}

function parseCsvToJson(csvText: string): RawEmployee[] {
    const rows = csvText.split('\n');
    const headers = rows[0].split(',').map(header => header.trim());

    return rows.slice(1).map(row => {
        const values = row.split(',').map(value => value.trim());
        return headers.reduce((obj: RawEmployee, header, index) => {
            obj[header as keyof RawEmployee] = values[index];
            return obj;
        }, {});
    });
}

function transformToEmployee(rawEmployee: RawEmployee): Employee {
    return {
        Name: rawEmployee.Name || '',
        Team: rawEmployee.Team || '',
        Title: rawEmployee.Title || '',
        Intern: rawEmployee.Intern?.toString().toUpperCase() === 'TRUE',
        Alias: rawEmployee.Alias || '',
        'Serial No.': rawEmployee['Serial No.'] || '',
        Links: rawEmployee.Links || '',
        Photo: rawEmployee.Photo || '',
        Resigned: rawEmployee.Resigned?.toString().toUpperCase() === 'TRUE',
        Testimonial: rawEmployee.Testimonial || ''
    };
}

export async function fetchEmployees(): Promise<Employee[]> {
    if (cache && (Date.now() - cache.timestamp < CACHE_DURATION)) {
        return cache.employees;
    }

    const csvText = await fetchCsvData();
    const rawEmployees = parseCsvToJson(csvText);
    const employees = rawEmployees.map(transformToEmployee);

    cache = {
        employees,
        timestamp: Date.now()
    };

    return employees;
} 