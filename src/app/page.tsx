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
        url: 'og-image.png',
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
    images: ['og-image.png'],
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

  return (
    <div className="min-h-screen grid-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12 text-xl md:w-1/2 mx-auto">
          <h1 className="text-blue-500 text-4xl md:text-7xl font-bold md:mb-2">MEET THE TEAM</h1>
          <p>Meet the talented individuals who make up FireAI. Our diverse team of experts is passionate about advancing artificial intelligence technology.</p>
        </div>

        {Object.entries(groupByTeam(employees)).map(([team, teamEmployees]) => (
          <div key={team} className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{team}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {teamEmployees.filter(employee => !employee.Resigned).map((employee, index) => (
                <EmployeeCard key={`${team}-${index}`} employee={employee} />
              ))}
            </div>
          </div>
        ))}
      </main>
      <div className="px-5 md:px-28 mx-10 border border-gray-600">
        <Testimonial employees={employees.filter(employee => employee.Testimonial)} />
      </div>
      <Footer />
    </div>
  );
}
