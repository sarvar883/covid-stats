import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 m-auto">
          <div className="jumbotron mt-3">
            <h2 className="text-center">404 Ошибка</h2>
            <h5 className="mt-3">Эта страница не найдена. Возможно, указанного ресурса больше не существует.</h5>

            <div className="button-group">
              <button className="btn btn-primary" onClick={props.history.goBack}>Назад</button>
              <Link to="/" className="btn btn-success ml-3">На стартовую страницу</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;