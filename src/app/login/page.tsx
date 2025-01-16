import UserLoginPage from "@/components/pages/UserLoginPage";

const LoginPage = () => {
  return (
    <div className="flex  mt-16 items-center justify-center">
      <div className=" border-white border p-3 rounded-md bg-gray-500 hover:bg-gray-700">
        <UserLoginPage />
      </div>
    </div>
  );
};

export default LoginPage;
