import React from 'react'
import { useForm} from "react-hook-form"



function NewForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
      } = useForm()

   async function onSubmit(data){
    await new Promise(resolve => setTimeout(resolve, 4000));
        console.log("submitting the form",data)
    }

   
  return (
 <form onSubmit = {handleSubmit(onSubmit)} className='flex-col '>

    <div>
        <label className="text-white text-2xl">First Name: </label>
        <input {...register("firstName",{
            required:true,
            minLength:{value:5,message:'First Name should have atleast 5 characters'},
            maxLength:{value:15,message:'First Name should have atmost 15 characters'}
            
            })} className={errors.firstName ? "border-2 border-rose-500" : ""}/>
            {errors.firstName && <p className="text-red-700 text-2xl">{errors.firstName.message}</p>}
    </div><br />
    <div>
        <label className="text-white text-2xl">Last Name: </label>
        <input {...register("lastName",{
            required:true,
            minLength:{value:5,message:'Last Name should have atleast 5 characters'},
            maxLength:{value:15,message:'Last Name should have atmost 15 characters'},
            pattern:{value:/^[A-za-z]+$/i,message:'Last Name should contain only alphabets'}
            })} className={errors.lastName ? "border-2 border-rose-500" : ""}/>
            {errors.lastName && <p className="text-red-700 text-2xl">{errors.lastName.message}</p>}
            </div>
  <br />
            <div>
                <label htmlFor="age" className='text-white text-2xl'>Age: </label>
                <input type="number" {...register("age", { 
                    required: true,
                    min:{value:18,message:'Less than 18'},
                    max:{value:99,message:"person not there"} })} />
                    {errors.age && <p className="text-red-700 text-2xl">{errors.age.message}</p>}
                </div><br />

            <div>

                <div>
                    <label htmlFor="email" className='text-white text-2xl'>Email: </label>
                    <input type="text" {...register("email",{
                        required:true,
                        pattern:{value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,message:'Invalid email'}
                    })}  
                    className={errors.email?"border-2 border-red-500":""}/>
                    {errors.email && <p className="text-red-700 text-2xl">{errors.email.message}</p>}
                    <br /><br />

                </div>
                <label htmlFor="gender" className='text-white text-2xl'>Gender: </label>
                <select {...register("gender", { required: true })}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <br />

    <input type="submit" disabled={isSubmitting}  value={isSubmitting?"Submiting":"submit"}className='bg-white text-blue'/>



 </form>
  )
}

export default NewForm