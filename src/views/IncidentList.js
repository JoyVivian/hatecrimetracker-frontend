import moment from 'moment';
const STATES = {
  "AL": "Alabama", 
  "AK": "Alaska", 
  "AZ": "Arizona", 
  "AR": "Arkansas", 
  "CA": "California", 
  "CO": "Colorado", 
  "CT": "Connecticut", 
  "DE": "Delaware", 
  "FL": "Florida", 
  "GA": "Georgia", 
  "HI": "Hawaii", 
  "ID": "Idaho", 
  "IL": "Illinois", 
  "IN": "Indiana", 
  "IA": "Iowa", 
  "KS": "Kansas", 
  "KY": "Kentucky", 
  "LA": "Louisiana", 
  "ME": "Maine", 
  "MD": "Maryland", 
  "MA": "Massachusetts", 
  "MI": "Michigan", 
  "MN": "Minnesota", 
  "MS": "Mississippi", 
  "MO": "Missouri", 
  "MT": "Montana", 
  "NE": "Nebraska", 
  "NV": "Nevada", 
  "NH": "New Hampshire", 
  "NJ": "New Jersey", 
  "NM": "New Mexico", 
  "NY": "New York", 
  "NC": "North Carolina", 
  "ND": "North Dakota", 
  "OH": "Ohio", 
  "OK": "Oklahoma", 
  "OR": "Oregon", 
  "PA": "Pennsylvania", 
  "RI": "Rhode Island", 
  "SC": "South Carolina", 
  "SD": "South Dakota", 
  "TN": "Tennessee", 
  "TX": "Texas", 
  "UT": "Utah", 
  "VT": "Vermont", 
  "VA": "Virginia", 
  "WA": "Washington", 
  "WV": "West Virginia", 
  "WI": "Wisconsin", 
  "WY" : "Wyoming"
}
const IncidentList = (props) =>{
  return (
    <div class="incident-list">
      {props.data.map(function (d, idx) {
        return (
          <div class="incident">
            <p class="title">{d.title}</p>
            <p class="location_time">
              <a href={d.url} target='_blank'> 
                {STATES[d.incident_location]?STATES[d.incident_location]:d.incident_location} | {moment(d.incident_time).format('MM/DD/YYYY')}
              </a>
            </p>
            <p class="description">{d.abstract}</p>
          </div>)
      })}
    </div>
  )
}
export default IncidentList
