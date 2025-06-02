'use client'

import { Card } from "@/components/ui/card"
import { CreditCard, PiggyBank, Banknote, FileText, Smartphone, User, ArrowDownToLine, Repeat2, Wallet } from "lucide-react"
import Link from "next/link"

const actions = [
  { icon: <Wallet className="text-indigo-700 w-6 h-6" />, label: "Account and Card" },
  { icon: <Repeat2 className="text-pink-500 w-6 h-6" />, label: "Transfer" },
  { icon: <ArrowDownToLine className="text-blue-500 w-6 h-6" />, label: "Withdraw" },
  { icon: <Smartphone className="text-yellow-500 w-6 h-6" />, label: "Mobile prepaid" },
  { icon: <Banknote className="text-emerald-500 w-6 h-6" />, label: "Pay the bill" },
  { icon: <PiggyBank className="text-indigo-500 w-6 h-6" />, label: "Save online" },
  { icon: <CreditCard className="text-orange-500 w-6 h-6" />, label: "Credit card" },
  { icon: <FileText className="text-indigo-700 w-6 h-6" />, label: "Transaction report" },
  { icon: <User className="text-pink-500 w-6 h-6" />, label: "Beneficiary" },
]

export default function ActionGrid() {
  return (
    <div className="grid grid-cols-3 gap-2  p-4">
      {actions.map((action, idx) => (
        <Link href='/' key={idx}>
        <Card
          
          className="flex flex-col items-center justify-start  rounded-xl shadow-xl hover:border-2 transition-all border border-primary h-26 w-26 p-1 "
        >
          {action.icon}
          <span className="text-sm  text-gray-800 text-center">{action.label}</span>
        </Card>
        </Link>
      ))}
    </div>
  )
}
