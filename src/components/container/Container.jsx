import './Container.css'

const Container = ({children}) => {
  return (
    <>
    <div className="container-main">{children}</div>
    </>
  )
}


export default Container;