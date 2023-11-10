import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToys = () => {
    useTitle("Add Toys");
  const {user} = useContext(AuthContext);

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
     fetch("https://assignment-11-server-three-gamma.vercel.app/addtoy", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     })
       .then((res) => res.json())
       .then((result) => {
         console.log(result);
       });
        console.log(data)
        form.reset();
    };

    const notify = () => toast("Added Data Successfully!");

    return (
      <div>
        <h3 className="text-5xl text-center font-bold mb-5">
          Add Your Toy Here
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label className="text-xl font-semibold">Toy Name</label>
          <select
            className="text-input ml-3 mr-5 bg-slate-50 text-base-100 p-2 w-30 h-30"
            {...register("name")}
          >
            <option value="Bat">Bat</option>
            <option value="Ball">Ball</option>
            <option value="Bars">Bars</option>
            <option value="Football">Football</option>
            <option value="Football Player Statue">Football Player</option>
            <option value="Cricket Player Statue">Cricket Player</option>
            <option value="Basketball Player Statue">Basketball Player</option>
          </select>
          <label className="text-xl font-semibold">Toy Price</label>
          <input
            className="text-input bg-slate-50 text-base-100 ml-3 p-2 w-30 h-30"
            {...register("price")}
          />
          <br />
          <label className="text-xl font-semibold mr-3 mt-2">Category</label>
          <select
            className="text-input bg-slate-50 text-base-100 mr-5 mt-4 p-2 w-30 h-30"
            {...register("categoryName")}
          >
            <option value="Soccer">Soccer</option>
            <option value="Cricket">Cricket</option>
            <option value="Basketball">Basketball</option>
          </select>
          <label className="text-xl mr-3 font-semibold">Sub Category</label>
          <select
            className="text-input bg-slate-50 text-base-100 p-2 w-30 h-30"
            {...register("subCategory")}
          >
            <option value="Football Toys">Football Toys</option>
            <option value="Cricket Bats">Cricket Bats</option>
            <option value="Basketball Post">Basketball Post</option>
            <option value="Goal Post">Goal Post</option>
            <option value="Cricket Ball">Cricket Ball</option>
            <option value="Basketball">Basketball</option>
            <option value="Football Player">Football Player</option>
            <option value="Cricket Player">Cricket Player</option>
            <option value="Basketball Players">Basketball Players</option>
          </select>
          <br />
          <label className="text-xl mt-4 font-semibold">Toy Image</label>
          <input
            className="text-input ml-3 mt-4 mb-4 bg-slate-50 text-base-100 p-2 w-30 h-30"
            type="url"
            {...register("image")}
          />
          <br />
          <label className="text-xl mt-4 font-semibold">Seller Name</label>
          <input
            className="text-input bg-slate-50 text-base-100 ml-3 mr-5 p-2 w-30 h-30"
            defaultValue={user?.displayName}
            {...register("sellerName")}
          />
          <label className="text-xl mt-4 font-semibold">Seller Email</label>
          <input
            className="text-input ml-3 bg-slate-50 text-base-100 p-2 w-30 mb-2 h-30"
            defaultValue={user?.email}
            {...register("sellerEmail")}
          />
          <br />
          <label className="text-xl mt-5 mb-3 font-semibold">
            Toy Description
          </label>{" "}
          <br />
          <textarea
            className="text-input bg-slate-50 text-base-100 p-2 w-30 h-30"
            {...register("details")}
          />
          <br />
          <lebel className="text-xl mt-4 font-semibold">Toy Quantity</lebel>
          <input
            className="text-input bg-slate-50 text-base-100 p-2 w-30 mt-4 ml-3 mr-5 h-30"
            type="number"
            {...register("quantity")}
          />
          <lebel className="text-xl mt-4 font-semibold">Toy Rating</lebel>
          <input
            className="text-input bg-slate-50 text-base-100 p-2 w-30 ml-3 h-30"
            type="number"
            {...register("rating")}
          />
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <button
            onClick={notify}
            className="w-60 mt-4 btn btn-secondary text-xl font-semibold"
          >
            <input type="submit" />
          </button>
          <ToastContainer />
        </form>
      </div>
    );
};

export default AddToys;