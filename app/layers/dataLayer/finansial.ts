import { InboundProductType, OutboundProductType } from "@/lib/type";
import { Employee } from "./karyawan";
type FinancialItem = InboundProductType | OutboundProductType | Employee | { biaya_operasional: number };

export const sumAll =(data:FinancialItem[] | null)=>{
    try{
    const sum = data?.reduce((acc:any,item:any)=>{
        const anchor = item.biaya_operasional || item.nominal_modal || item.gaji_karyawan || 0
        return acc + anchor
    },0)
    
    return sum
    }catch(e){
        console.error(e)
    }
}