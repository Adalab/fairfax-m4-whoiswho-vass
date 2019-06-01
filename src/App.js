import React from 'react';
import './App.css';

const employeeArr = [
  {
    givenName: 'Pedro Javier',
    sn: 'Perez Mora',
    sAMAccountName: 'pedro.perez'
  },
  {
    givenName: 'Francisco Javier',
    sn: 'Pérez García',
    sAMAccountName: 'javier.perezgarcia'
  },
  {
    givenName: 'Javier',
    sn: 'Perez Alonso',
    sAMAccountName: 'javier.perez'
  },
  {
    givenName: 'Javier',
    sn: 'Perez Gonzalo',
    sAMAccountName: 'javier.pgonzalo'
  },
  {
    givenName: 'Juan Javier',
    sn: 'Perez Ruiz',
    sAMAccountName: 'juan.perez'
  },
  {
    givenName: 'Javier',
    sn: 'Perez Garcia',
    sAMAccountName: 'jperez'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArr: [],
      filterName: ''
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    const newArr = employeeArr.map(item => {
      return { ...item };
    });
    this.setState({ nameArr: newArr });
  }

  handleFilter(event) {
    const currentValue = event.currentTarget.value;
    this.setState({ filterName: currentValue });
  }

  render() {
    const { nameArr, filterName } = this.state;
    if (filterName === '') {
      return (
        <div className="App">
          <label htmlFor="filterEmployee">Campo de búsqueda</label>
          <input
            onChange={this.handleFilter}
            name="filterEmployee"
            id="filterEmployee"
            type="text"
          />{' '}
        </div>
      );
    }
    return (
      <div className="App">
        <label htmlFor="filterEmployee">Campo de búsqueda</label>
        <input
          onChange={this.handleFilter}
          name="filterEmployee"
          id="filterEmployee"
          type="text"
        />
        <ul className="employee__list">
          {nameArr
            .filter(item =>
              `${item.givenName} ${item.sn}`
                .toLocaleLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .includes(
                  filterName
                    .toLocaleLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                )
            )
            .map((item, index) => (
              <li key={index} className="employee__list--item">
                {item.givenName} {item.sn}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
