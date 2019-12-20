import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  formControl: {
    margin: '10px',
    minWidth: 120,
  },
  subCategory: {
    'margin-left': '20px',
  }
};

class FiltersDropDown extends Component {
  constructor() {
    super();

    this.state = {
      selectedOption: ''
    };
  }

  selectCategory = event => {
    const { onSelect } = this.props;
    this.setState({
      selectedOption: event.target.value
    });

    const subCategory = event.currentTarget.getAttribute('data-breed') || '';
    const formattedSelectedOption = subCategory ? subCategory : event.target.value;

    onSelect && onSelect(formattedSelectedOption);
  };

  renderSubCategory = (breed) => {
    const { classes, data } = this.props;

    if (!data[breed] || !data[breed].length) return null;

    return data[breed].map(item => {
      return (
        <MenuItem
          className={classes.subCategory}
          value={item}
          data-breed={`${breed}/${item}`}>
          - {item}
          </MenuItem>
      );
    });
  };

  render() {
    const { classes, data } = this.props;
    const { selectedOption } = this.state;

    debugger
    return (
        <FormControl className={classes.formControl}>
          <Select
            defaultValue=""
            input={<Input id="grouped-select" value={selectedOption}/>}
            onChange={this.selectCategory}
          >
            {
              !!data && Object.keys(data).map(key => {
                return [
                  <MenuItem value={key}>{key}</MenuItem>,
                  this.renderSubCategory(key)
                ]
              })
            }
          </Select>
        </FormControl>
    );
  }

}


export default withStyles(styles)(FiltersDropDown);