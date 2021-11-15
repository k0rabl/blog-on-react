import { useHistory } from "react-router"

const Detail = () => {
  const history = useHistory();

  return(
    <div>
      {console.log(history)}
      <h1>1111</h1>
    </div>
  )
}

export default Detail