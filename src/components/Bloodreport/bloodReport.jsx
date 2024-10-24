import "./bloodreport.css";


const BloodReport = () => {
  // Sample data object to be mapped
  const data = {
    rbc: [
      { type: 'Angled Cells', count: 222, percentage: '67%' },
      { type: 'Borderline Ovalocytes', count: 50, percentage: '20%' },
      { type: 'Burr Cells', count: 87, percentage: '34%' },
      { type: 'Fragmented Cells', count: 2, percentage: '0.12%' },
      { type: 'Ovalocytes'},
      { type: 'Rounded RBC'},
      { type : 'Teardrops'}

    ],
    wbc: [
      { type: 'Basophil', count: 222, percentage: '67%' },
      { type: 'Eosinophil', count: 50, percentage: '20%' },
      { type: 'Lymphocyte', count: 87, percentage: '34%' },
      { type: 'Monocyte', count: 2, percentage: '0.12%' },
    ],
    platelets: { count: 222, percentage: '100%' },
  };

  return (
    <div className="blood-report-container">
      <table>
        <thead>
          <tr>
            <th>RBC</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.rbc.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.count}</td>
              <td>{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>WBC</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.wbc.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.count}</td>
              <td>{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table >
        <thead>
          <tr>
            <th>Platelets</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Platelets</td>
            <td>{data.platelets.count}</td>
            <td>{data.platelets.percentage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BloodReport;
