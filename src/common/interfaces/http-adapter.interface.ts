
export interface HttpAdapter{
    fetch<T>(url: string): Promise<T>;
}