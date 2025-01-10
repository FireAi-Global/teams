import { Employee, RawEmployee } from '../types/employee';

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
    const csvText = await fetchCsvData();
    const rawEmployees = parseCsvToJson(csvText);
    return rawEmployees.map(transformToEmployee);
} 