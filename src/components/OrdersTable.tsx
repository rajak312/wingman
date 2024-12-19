import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface Product {
  Product: string;
  Date: string;
  Time: string;
  Time_Spent: string;
  Order_Value: string;
  Commission: string;
  image: string;
}

const products: Product[] = [
  {
    Product: "Product A",
    Date: "24 Apr '2024",
    Time: "10:24 AM",
    Time_Spent: "2h 5m",
    Order_Value: "120.21",
    Commission: "55",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
  {
    Product: "Product B",
    Date: "24 Apr '2024",
    Time: "10:24 AM",
    Time_Spent: "1h 50m",
    Order_Value: "208.45",
    Commission: "70",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
  {
    Product: "Product C",
    Date: "25 Apr '2024",
    Time: "10:24 AM",
    Time_Spent: "3h 20m",
    Order_Value: "200.00",
    Commission: "90",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
  {
    Product: "Product D",
    Date: "25 Apr '2024",
    Time: "10:24 AM",
    Time_Spent: "4h 5m",
    Order_Value: "250.75",
    Commission: "110",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
];

export default function ProductTable() {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-[10px]">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-[#DCDFE4]">
            <TableHead className="min-w-[150px] font-normal">Product</TableHead>
            <TableHead className="min-w-[150px] font-normal">Date</TableHead>
            <TableHead className="min-w-[150px] font-normal">
              Time Spent
            </TableHead>
            <TableHead className="min-w-[150px] font-normal">
              Order Value
            </TableHead>
            <TableHead className="min-w-[150px] font-normal">
              Commission
            </TableHead>
            <TableHead className="min-w-[150px] font-normal"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, idx) => (
            <TableRow key={idx}>
              <TableCell className="flex items-center gap-2">
                <Image
                  src={product.image}
                  alt="product_img"
                  width={40}
                  height={40}
                />
                <span>{product.Product}</span>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span>{product.Date}</span>
                  <span>{product.Time}</span>
                </div>
              </TableCell>
              <TableCell>{product.Time_Spent}</TableCell>
              <TableCell>${product.Order_Value}</TableCell>
              <TableCell className="font-bold">${product.Commission}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-900">
                  View Chat
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
