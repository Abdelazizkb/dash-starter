import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Pagination,
  Table,
} from "@/components";
import DashboardLayout from "@/layout/dashboard";
import { useUsers } from "./queries";
import CreateOrEditUserModal from "./create-or-edit";
import usePopup from "@/lib/use-popup";
import { Edit } from "lucide-react";
import { usePagination } from "@/lib/use-pagination";
import { useEffect } from "react";

export interface IUser {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  comment?: string;
}

const { Main } = DashboardLayout;
const { Header, Content } = Main;
const UsersList = () => {
  const { currentPage, onPageChange } = usePagination();

  const { data, isLoading, refetch } = useUsers({
    page: currentPage,
  });

  const createOrEditModal = usePopup<IUser | undefined>();

  useEffect(() => {
    refetch();
  }, [currentPage]);

  return (
    <Main>
      <Header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>users</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Header>
      <Content>
        <Card className="max-w-full h-full">
          <CardHeader>
            <CardTitle>Users management</CardTitle>
            <CardDescription>
              Some text describe table or module content
            </CardDescription>
            <CardAction>
              <Button onClick={() => createOrEditModal.open(undefined)}>
                New User
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table<IUser>
              columns={[
                {
                  label: "Id",
                  key: "id",
                },
                {
                  label: "First Name",
                  key: "firstname",
                },
                {
                  label: "Last Name",
                  key: "lastname",
                },
                {
                  label: "Email",
                  key: "email",
                },
                {
                  label: "Role",
                  key: "role",
                  cellRenderer({ cellData }) {
                    const getColor = () => {
                      switch (cellData) {
                        case "admin":
                          return "bg-red-500";
                        case "editor":
                          return "bg-yellow-500";
                        case "viewer":
                          return "bg-green-500";
                      }
                    };
                    return (
                      <span
                        className={`${getColor()} px-1 rounded-sm text-white font-medium capitalize`}
                      >
                        {cellData}
                      </span>
                    );
                  },
                },
                {
                  label: "Comment",
                  key: "comment",
                  className: "max-w-[200px] overflow-hidden text-ellipsis",
                },
                {
                  label: "Actions",
                  key: "id",
                  cellRenderer({ rowData }) {
                    return (
                      <span className="h-10 overflow-hidden">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() =>
                            createOrEditModal.open(rowData as IUser)
                          }
                        >
                          <Edit />
                        </Button>
                      </span>
                    );
                  },
                },
              ]}
              data={data?.data}
              isLoading={isLoading}
            />
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Pagination
              currentPage={currentPage}
              totalPages={data?.totalPages}
              onPageChange={onPageChange}
            />
          </CardFooter>
        </Card>
      </Content>
      <CreateOrEditUserModal {...createOrEditModal} />
    </Main>
  );
};

export default UsersList;
