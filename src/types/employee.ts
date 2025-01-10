export type Employee = {
    Alias?: string;
    Intern: boolean;
    Links?: string;
    Name: string;
    'Serial No.': string;
    Team: string;
    Title: string;
    Photo: string;
    Resigned: boolean;
    Testimonial?: string;
};

export type RawEmployee = {
    Name?: string;
    Team?: string;
    Title?: string;
    Intern?: string;
    Alias?: string;
    'Serial No.'?: string;
    Links?: string;
    Photo?: string;
    Resigned?: string;
    Testimonial?: string;
}; 