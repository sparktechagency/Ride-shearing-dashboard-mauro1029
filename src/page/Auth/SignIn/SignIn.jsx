// import signinImage from "../../../assets/auth/signIn.png";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Checkbox } from "antd";
// import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
// import CustomButton from "../../../utils/CustomButton";
// import CustomInput from "../../../utils/CustomInput";
// import { useLoginMutation } from "../../../redux/features/auth/authApi";
// import { toast } from "sonner";
// import { useDispatch } from "react-redux";
// import { loggedUser } from "../../../redux/features/auth/authSlice";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [login, { isLoading }] = useLoginMutation();
//   const handleSubmit = async (values) => {
//     const { email, password } = values;
//     try {
//       const res = await login({ email, password });
//       if (res.error) {
//         toast.error(res.error.data.message);
//         console.log(res.error.data.message);
//       }
//       if (res.data) {
//         dispatch(
//           loggedUser({
//             token: res.data.data.attributes?.tokens?.access?.token,
//             user: res.data.data.attributes?.user,
//           })
//         );
//         toast.success(res.data.message);
//         navigate("/");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="w-full  h-full md:h-screen md:flex justify-around ">
  
//     <div className="w-full max-w-7xl mx-auto rounded-md h-[70%] md:my-28 grid grid-cols-1 md:grid-cols-2 place-content-center px-5 py-10 gap-8  md:mx-10">
//       <div className="flex justify-center">
//         <img
//           src={signinImage}
//           className="w-full h-full mx-auto "
//           alt="Sign in illustration"
//         />
//       </div>
//       <div className="mt-16 px-8">
//         <div className="mb-8">
//           <h1 className="font-semibold text-3xl text-gray-800">
//             Hello, Welcome!
//           </h1>
//           <p className="text-gray-500">
//             Please Enter Your Details Below to Continue
//           </p>
//         </div>
//         <Form
//           layout="vertical"
//           onFinish={handleSubmit}
//           className="space-y-4"
//           initialValues={{
//             remember: true,
//           }}
//         >
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your email!",
//               },
//               {
//                 type: "email",
//                 message: "The input is not a valid email!",
//               },
//             ]}
//           >
//             <CustomInput
//               type="email"
//               icon={HiOutlineMail}
//               placeholder={"Enter Email"}
//             />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//           >
//             <CustomInput
//               type="password"
//               icon={HiOutlineLockClosed}
//               placeholder={"Enter password"}
//               isPassword
//             />
//           </Form.Item>

//           <div className="flex justify-between items-center">
//             <Form.Item name="remember" valuePropName="checked" noStyle>
//               <Checkbox>Remember me</Checkbox>
//             </Form.Item>
//             <Link to="/auth/forget-password" className="underline">
//               Forgot password?
//             </Link>
//           </div>

//           <Form.Item>
//             <CustomButton loading={isLoading} className="w-full" border={true}>
//               Sign In
//             </CustomButton>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SignIn;




import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in with', { email, password, rememberMe });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <span role="img" aria-label="thumbs-up" className="text-3xl">
              👍
            </span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Please Enter Your Details Below to Continue</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
