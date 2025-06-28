/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "../loader";
import {
  Table as BaseTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface cellRendererProps<TData> {
  rowData: TData;
  cellData: any;
}

interface Props<TData> {
  columns?: Array<{
    label?: string;
    key: string;
    cellRenderer?: (props: cellRendererProps<TData>) => any;
    className?: string;
  }>;
  data?: {
    [key: string]: any;
  }[];
  rowActions?: (rowData?: TData) => any;
  frozen?: "left" | "right";
  isLoading?: boolean;
  onDoubleClick?: (rowData?: TData) => void;
  /* pagination?: IPagination; */
}

function Table<TData>({
  columns = [],
  data = [],
  rowActions,
  frozen = "right",
  isLoading,
  onDoubleClick,
}: /*   pagination,
 */ Props<TData>) {
  const cellData = (
    path: string,
    object?: {
      [key: string]: any;
    }
  ) => {
    return path.split(".").reduce((o, i) => (o ? o[i] : undefined), object);
  };

  const renderHeader = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return columns.map(({ key, label, cellRenderer, ...column }, index) => {
      return (
        <TableHead {...column} key={index}>
          <p>{label}</p>
        </TableHead>
      );
    });
  };

  const renderBody = () => {
    return data.map((item, id) => {
      return (
        <TableRow
          key={id}
          onDoubleClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onDoubleClick && onDoubleClick(item as any);
          }}
        >
          {rowActions && frozen === "left" && (
            <TableCell>{rowActions(item as TData)}</TableCell>
          )}
          {columns.map(({ key, cellRenderer, ...column }, index) => {
            return (
              <TableCell {...column} key={index}>
                {cellRenderer
                  ? cellRenderer({
                      rowData: item,
                      cellData: cellData(key, item),
                    } as cellRendererProps<TData>)
                  : cellData(key, item)}
              </TableCell>
            );
          })}
          {rowActions && frozen === "right" && (
            <TableCell className="operation">
              {rowActions(item as TData)}
            </TableCell>
          )}
        </TableRow>
      );
    });
  };

  return (
    <div className="border-1 rounded-md">
      <BaseTable className="rounded-md overflow-hidden">
        <TableHeader className="bg-gray-50 hover:bg-gray-50 rounded-t-md">
          <TableRow className="rounded-t-md">{renderHeader()}</TableRow>
        </TableHeader>
        <TableBody>{renderBody()}</TableBody>
      </BaseTable>
      {isLoading && <Loader />}
    </div>
  );
}

export default Table;
