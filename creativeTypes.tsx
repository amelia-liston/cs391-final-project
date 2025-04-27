export type CreativeTypes = {
    id: string;
    question: string;
    // a1
    a1: string | null;
    a1Type: string | null;
    a1nextId: string | null;
    // a2
    a2: string | null;
    a2Type: string;
    a2nextId: string | null;
    // a3
    a3: string | null;
    a3Type: string;
    a3nextId: string | null;
    // a4
    a4: string | null;
    a4Type: string | null;
    a4nextId: string | null;
}

export type Option = {
    text:string
    nextId: string
    type: string | null
}