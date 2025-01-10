import { Employee } from '../types/employee';
import Navigation from '../components/Navigation';
import EmployeeCard from '../components/EmployeeCard';
import { fetchEmployees } from '../utils/fetchEmployees';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet the Team | FireAI.in',
  description: 'Meet the talented individuals who make up FireAI. Our diverse team of experts is passionate about advancing artificial intelligence technology.',
  openGraph: {
    title: 'Meet the Team | FireAI.in',
    description: 'Meet the talented individuals who make up FireAI. Our diverse team of experts is passionate about advancing artificial intelligence technology.',
    type: 'website',
    url: 'https://team.fireai.in',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FireAI Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet the Team | FireAI.in',
    description: 'Meet the talented individuals who make up FireAI. Our diverse team of experts is passionate about advancing artificial intelligence technology.',
    images: ['/og-image.jpg'],
  },
};

export default async function Home() {
  const employees = await fetchEmployees();

  const groupByTeam = (employees: Employee[]): Record<string, Employee[]> => {
    return employees.reduce((groups, employee) => {
      const team = employee.Team || 'Other';
      return {
        ...groups,
        [team]: [...(groups[team] || []), employee],
      };
    }, {} as Record<string, Employee[]>);
  };

  console.log(employees);

  return (
    <div className="min-h-screen grid-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">We are the <span className="underline">people</span></h1>
          <h2 className="text-5xl font-bold mb-8">who make up <span className="text-blue-500">FireAI</span></h2>
        </div>

        {Object.entries(groupByTeam(employees)).map(([team, teamEmployees]) => (
          <div key={team} className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{team}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamEmployees.filter(employee => !employee.Resigned).map((employee, index) => (
                <EmployeeCard key={`${team}-${index}`} employee={employee} />
              ))}
            </div>
          </div>
        ))}
      </main>
      <div className="px-28 mx-10 border border-gray-600">
        <Testimonial employees={employees.filter(employee => employee.Testimonial)} />
      </div>
      <Footer />
    </div>
  );
}
