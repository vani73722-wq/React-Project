function Form() {
  return (
    <form className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-md mx-auto">
      <div className="mb-3 text-start">
        <label htmlFor="exampleInputEmail1" className="form-label text-sm font-semibold text-slate-700">
          Email address
        </label>
        <input
          type="email"
          className="form-control rounded-xl"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text text-xs">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="exampleInputPassword1" className="form-label text-sm font-semibold text-slate-700">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-xl"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check text-start">
        <input type="checkbox" id="exampleCheck1" className="form-check-input" />
        <label htmlFor="exampleCheck1" className="form-check-label text-sm text-slate-600">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full rounded-xl py-2 font-medium">
        Submit
      </button>
    </form>
  );
}

export default Form;
