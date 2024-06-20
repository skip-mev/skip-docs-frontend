import { FC } from "react";

const TableBody: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <tbody className="divide-y divide-[#F3F6F8] divide-opacity-10">
      {children}
    </tbody>
  );
};

interface TableCellProps {
  align?: "left" | "right" | "center";
  colSpan?: number;
  children?: React.ReactNode;
}

const TableCell: FC<TableCellProps> = ({
  align = "left",
  children,
  colSpan,
}) => {
  return (
    <td className={`text-${align} p-4`} colSpan={colSpan}>
      {children}
    </td>
  );
};

const TableRow: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <tr>{children}</tr>;
};

interface TableHeaderCellProps {
  align?: "left" | "right" | "center";
  children?: React.ReactNode;
}

const TableHeaderCell: FC<TableHeaderCellProps> = ({
  align = "left",
  children,
}) => {
  return <th className={`text-${align} p-4`}>{children}</th>;
};

const TableHead: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <thead className="bg-[#F3F6F8]/5 text-white/50 ">
      <tr>{children}</tr>
    </thead>
  );
};

interface TableProps {
  children?: React.ReactNode;
}

const Table: FC<TableProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#F3F6F8]/5">{children}</table>
    </div>
  );
};

export default Object.assign(Table, {
  Head: TableHead,
  HeaderCell: TableHeaderCell,
  Row: TableRow,
  Cell: TableCell,
  Body: TableBody,
});
