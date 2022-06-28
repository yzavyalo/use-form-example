import {createBook} from "../../actions/book-actions";
import {useDispatch} from "react-redux";
import {
  useForm
} from "react-hook-form";

const CreateBookForm = () => {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors }} = useForm(); 

  const onSubmit = async data =>  {
    //e.preventDefault();
      dispatch(createBook({
        title: data.bookName,
        author: data.bookAuthor,
      }))
  }

  return  <div className="create_book_form_wrapper">
      <form className="create_book_form row" onSubmit={handleSubmit(onSubmit)}>
        <div className="create_book_input col-md-6" >
          <label htmlFor="bookName" className="form-label">Book Title</label>
          <input type="text" className="form-control" {...register('bookName',{ required: "This field is required" })}  />
          {errors.bookName && <span className="form_error">This field is required</span>}
        </div>
        <div className="create_book_input col-md-6">
          <label htmlFor="bookAuthor" className="form-label">Book Author</label>
          <input type="text" className="form-control" {...register('bookAuthor', { required: "This field is required" })} />
          {errors.bookAuthor && <span className="form_error">This field is required</span>}
        </div>
        <div className="create_book_form_add_btn_wrapper">
            <button type="submit" className="btn btn-primary">Create book</button>
        </div>
      </form>
    </div>
}

export default CreateBookForm