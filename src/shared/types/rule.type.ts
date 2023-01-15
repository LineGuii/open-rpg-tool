export default interface IRule {
    id: number,
    name: string,
    title: string,
    entries: string[],
    source: string,
    pageNumber: number,
    tags?: string[]
}