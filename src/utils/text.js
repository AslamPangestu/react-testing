export const calculateNetSalary = (wages)=>{
    const TAX = 10/100;
    const netSalary = wages - wages * TAX
    return `Gaji bersih anda: RP ${netSalary}`;
}

export const hello = (name)=>{
    return `Hello ${name}`;

}