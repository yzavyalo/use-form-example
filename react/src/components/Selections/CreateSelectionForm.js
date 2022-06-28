import { useDispatch} from "react-redux";
import {createSelection} from "../../actions/selection-actions";
import {
    useForm
  } from "react-hook-form";

function CreateSelectionForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors }} = useForm(); 

  const onSubmit = async data =>  {
      dispatch(createSelection({
        title: data.selectionName,
        author: data.selectionAuthor,
        email: data.selectionEmail
      }))
  }


  return (
    <div className="create_selection_form_wrapper">
      <form
          className="create_selection_form row"
          onSubmit={handleSubmit(onSubmit)}
      >
        <div className="create_selection_input col-md-4">
          <label htmlFor="selectionName" className="form-label">
              Selection Title
          </label>
          <input
              type="text"
              className="form-control"
              {...register('selectionName',{ required: "This field is required" })}
          />
          {errors.selectionName && (
              <span className="form_error">
                  This field is required
              </span>
          )}
        </div>
        <div className="create_selection_input col-md-4">
          <label htmlFor="selectionAuthor" className="form-label">
              Selection Author
          </label>
          <input
              type="text"
              className="form-control"
              {...register('selectionAuthor',{ required: "This field is required" })}
          />
          {errors.selectionAuthor && (
              <span className="form_error">
                  This field is required
              </span>
          )}
        </div>
        <div className="create_selection_input col-md-4">
          <label htmlFor="selectionEmail" className="form-label">
              E-mail
          </label>
          <input
              type="email"
              className="form-control"
              {...register('selectionEmail',{ required: "This field is required" })}
          />
          {errors.selectionEmail && (
              <span className="form_error">
                  This field is required
              </span>
          )}
        </div>
        <div className="create_selection_form_add_btn_wrapper">
          <button type="submit" className="btn btn-primary">
              Create selection
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSelectionForm;
