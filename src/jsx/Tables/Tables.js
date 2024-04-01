import PropTypes from "prop-types";
// custom components
import { Table, Dropdown, DropdownButton } from "react-bootstrap";
// custom imports
import Image from "./../Image/Image";
import Avatar from "./../../assets/images/johndoe.jpg";

/**
 * Name:Table
 * Desc: Render Table
 * @param {string} src
 * @param {string} title
 * @param {string} className
 * @param {string} text
 */

const Tables = ({ className, ...rest }) => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Dropdown</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ maxWidth: "42px" }}>
            <Image
              
              src={Avatar}
              className="avatar"
            />
          </td>
          <td>John Doe</td>
          <td>123 Main St Anytown, USA</td>
          <td>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </td>
          <td style={{ maxWidth: "70px" }}>
            <div className="d-flex gap-3">
              <i class="pe-auto text-primary fs-26 las la-pen"></i>
              <i class="pe-auto text-success fs-26 las la-save"></i>
              <i class="pe-auto text-danger fs-26 las la-trash"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ maxWidth: "42px" }}>
            <Image
              
              src={Avatar}
              className="avatar"
            />
          </td>
          <td>John Doe</td>
          <td>123 Main St Anytown, USA</td>
          <td>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </td>
          <td style={{ maxWidth: "70px" }}>
            <div className="d-flex gap-3">
              <i class="pe-auto text-primary fs-26 las la-pen"></i>
              <i class="pe-auto text-success fs-26 las la-save"></i>
              <i class="pe-auto text-danger fs-26 las la-trash"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ maxWidth: "42px" }}>
            <Image
              
              src={Avatar}
              className="avatar"
            />
          </td>
          <td>John Doe</td>
          <td>123 Main St Anytown, USA</td>
          <td>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </td>
          <td style={{ maxWidth: "70px" }}>
            <div className="d-flex gap-3">
              <i class="pe-auto text-primary fs-26 las la-pen"></i>
              <i class="pe-auto text-success fs-26 las la-save"></i>
              <i class="pe-auto text-danger fs-26 las la-trash"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

Tables.propTypes = {
  className: PropTypes.string,

};

export default Tables;
