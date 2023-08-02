import './Faq.css'

function Faq (){
  return(
    <div className="body-collapse">
      <div className='title'>
        <h1><strong>FAQ</strong></h1>
      </div>
      <p>
        <a className="btn" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Alterna primeiro elemento</a>
        <button className="btn" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Alterna segundo elemento</button>
        <button className="btn" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Alterna terceiro elemento</button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body">
              Anim pariatur cliche reprehenderit, enim alemanha 7x1 brasil life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq