import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../help/Message';
import Spinner from '../help/Spinner';
import RenderChart from './RenderChart';

import { getHistoricalDataByCountry } from '../../actions/actions';

const History = () => {
  const [country, setCountry] = useState('');
  const [data, setData] = useState({
    province: [],
    timeline: {
      cases: {},
      deaths: {},
      recovered: {}
    }
  });

  const dispatch = useDispatch();

  const history = useSelector(state => state.history);
  let { loading, error } = history;

  useEffect(() => {
    setData(history.data);
  }, [history.data]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getHistoricalDataByCountry({ country, lastdays: 120 }));
    setCountry('');
  };

  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col-12 m-auto">
          <h2 className="text-center">Most accurate COVID-19 information</h2>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-lg-5 col-md-8 m-auto">
          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Enter a country</span>
              </div>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                placeholder="Country"
                required
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {error && <Message variant="danger">{error}</Message>}

      {loading ? <Spinner /> : (
        <>
          {Object.keys(data.timeline.cases).length > 0 && (
            <>
              <div className="row mb-3">
                <div className="col-12 mt-2">
                  <RenderChart
                    name="Total Cases"
                    title={`Total Cases in ${data.country}`}
                    data={data.timeline.cases}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12 mt-2">
                  <RenderChart
                    name="New Cases Per Day"
                    title={`New Cases Per Day in ${data.country}`}
                    data={data.timeline.cases}
                    newCases={true}
                  />
                </div>
              </div>
            </>
          )}

          {Object.keys(data.timeline.deaths).length > 0 && (
            <div className="row mb-3">
              <div className="col-12">
                <RenderChart
                  name="Total Deaths"
                  title={`Total Deaths in ${data.country}`}
                  data={data.timeline.deaths}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default History;