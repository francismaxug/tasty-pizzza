import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    orderID: "3456785",
    orderDetails: "x1 vegetables pizza..",
    date: "6/6/24",
    time: "7:30",
    orderType: "Dien in",
    price: "150.00 EGP",
  },
  {
    orderID: "3456785",
    orderDetails: "x2 Chicken BBQ pizza..",
    date: "6/6/24",
    time: "7:30",
    orderType: "Takewawy",
    price: "70.00 EGP",
  },
  {
    orderID: "3456785",
    orderDetails: "x3 Cheese burger",
    date: "6/6/24",
    time: "7:30",
    orderType: "Dien in",
    price: "230.00 EGP",
  },
  {
    orderID: "3456785",
    orderDetails: "x1 vegetables pizza..",
    date: "6/6/24",
    time: "7:30",
    orderType: "Takeaway",
    price: "105.00 EGP",
  },
  {
    orderID: "3456785",
    orderDetails: "x1 vegetables pizza..",
    date: "6/6/24",
    time: "7:30",
    orderType: "Takeaway",
    price: "150.00 EGP",
  },
  {
    orderID: "3456785",
    orderDetails: "x1 vegetables pizza..",
    date: "6/6/24",
    time: "7:30",
    orderType: "Dien in",
    price: "150.00 EGP",
  },
]

export function TableDemo() {
  return (
    <div className=" overflow-x-auto mt-5">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-slate-700 font-semibold">
              Order ID
            </TableHead>
            <TableHead className="text-slate-700 font-semibold">
              Order details
            </TableHead>
            <TableHead className="text-slate-700 font-semibold">Date</TableHead>
            <TableHead className="text-slate-700 font-semibold">Time</TableHead>
            <TableHead className="text-slate-700 font-semibold">
              Order type
            </TableHead>
            <TableHead className="text-slate-700 font-semibold">
              Price
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, key) => (
            <TableRow key={key} className=" odd:bg-gray-100">
              <TableCell className="text-xs">{invoice.orderID}</TableCell>
              <TableCell className="text-xs">{invoice.orderDetails}</TableCell>
              <TableCell className="text-xs">{invoice.date}</TableCell>
              <TableCell className="text-xs">{invoice.time}</TableCell>
              <TableCell className="text-xs">{invoice.orderType}</TableCell>
              <TableCell className="text-xs">{invoice.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className=" font-semibold pr-4">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
