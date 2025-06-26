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
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Table,
} from "@/components";
import DashboardLayout from "@/layout/dashboard";
import { useUsers } from "./queries";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  comment?: string;
}

const { Main } = DashboardLayout;
const { Header, Content } = Main;
const UsersList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading } = useUsers();

  console.log({ data });
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
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Users management</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button>New User</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table<IUser>
              columns={[
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
                  minWidth: 200,
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
                },
              ]}
              data={data?.data}
              isLoading={isLoading}
            />
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </Content>
    </Main>
  );
};

export default UsersList;
