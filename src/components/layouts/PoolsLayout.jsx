import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { FiPlus } from "react-icons/fi";

import leaves5 from "../../assets/images/referral/Leaves_05.svg";
import leaves1 from "../../assets/images/referral/Leaves_01.svg";
import leaves8 from "../../assets/images/minting/Leaves_08.svg";
import leaves7 from "../../assets/images/minting/Leaves_07.svg";

import referralRhino from "../../assets/images/referral/CrazyZoo_Rhino_V1_2224.png";

const MySearch = (props) => {
  let input;
  const handleChange = () => {
    props.onSearch(input.value);
  };
  return (
    <div>
      <input
        className="form-control poolsSearch"
        ref={(n) => (input = n)}
        type="text"
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
};

const expandRow = {
  onlyOneExpanding: true,
  renderer: (row) => (
    <div className="expandContent">
      <div className="row">
        <div className="col-4">
          <div className="expandLabel">
            <span>Available:</span>
            <span className="expandLabelClear">0LP (0$)</span>
          </div>
        </div>
        <div className="col-4">
          <div className="expandLabel">
            <span>Deposited:</span>
            <span className="expandLabelClear">0LP (0$)</span>
          </div>
        </div>
        <div className="col-4">
          <div className="expandLabel">
            <span>Earned rewards:</span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input type="number" className="expandInput" placeholder="0.0" />
        </div>
        <div className="col-4">
          <div className="expandLabel">
            <input type="number" className="expandInput" placeholder="0.0" />
          </div>
        </div>
        <div className="col-4">
          <div className="expandLabel">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="expandBtn">Approve</div>
        </div>
        <div className="col-4">
          <div className="expandBtn">Unstake LP Tokens</div>
        </div>
        <div className="col-4">
          <div className="expandBtn">Claim</div>
        </div>
      </div>
    </div>
  ),
  showExpandColumn: true,
  expandColumnPosition: "right",
  expandHeaderColumnRenderer: ({ isAnyExpands }) => {
    if (isAnyExpands) {
      return <b>-</b>;
    }
    return <b>+</b>;
  },
  expandColumnRenderer: ({ expanded }) => {
    if (expanded) {
      return <span className="expandArrow">&#9650;</span>;
    }
    return <span className="expandArrow">&#9660;</span>;
  },
};

const PoolsLayout = (props) => {
  const farms = props.data;

  const { SearchBar } = Search;

  const columns = [
    {
      dataField: "title",
      text: "Pool",
      sort: true,
      sortCaret: (order, column) => {
        if (!order)
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        else if (order === "asc")
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        else if (order === "desc")
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        return null;
      },
      classes: "firstColumn",
    },
    {
      dataField: "TVL",
      text: "TVL",
      sort: true,
      sortCaret: (order, column) => {
        if (!order)
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        else if (order === "asc")
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        else if (order === "desc")
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        return null;
      },
    },
    {
      dataField: "rewards",
      text: "Rewards",
      sort: true,
      sortCaret: (order, column) => {
        if (!order)
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        else if (order === "asc")
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        else if (order === "desc")
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        return null;
      },
    },
    {
      dataField: "apr",
      text: "APR",
      sort: true,
      sortCaret: (order, column) => {
        if (!order)
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        else if (order === "asc")
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        else if (order === "desc")
          return (
            <span>
              &nbsp;&nbsp;
              <font color="white" className="crt">
                &#9660;
              </font>
              <font color="white" className="crt">
                &#9650;
              </font>
            </span>
          );
        return null;
      },
    },
  ];

  const rowStyle = { backgroundColor: "#c8e6c9" };
  const rowClass = "poolsRow";

  return (
    <div className="poolsPageContainer">
      <img src={leaves1} className="referralLeaves1" alt="" />
      <img src={leaves5} className="referralLeaves5" alt="" />
      <img src={leaves8} className="referralLeaves8" alt="" />
      <img src={leaves7} className="referralLeaves7" alt="" />
      <img src={referralRhino} className="referralRhino" alt="" />

      <div className="row poolsBoxWrapper centered-axis-x centered-axis-y">
        <div className="row addPoolBox">
          <Link to={"/add"}>
            <Button>
              <FiPlus size={20} />
              New Position
            </Button>
          </Link>
        </div>
        <ToolkitProvider keyField="id" data={farms} columns={columns} search>
          {(props) => (
            <div>
              <MySearch {...props.searchProps} />

              <BootstrapTable
                {...props.baseProps}
                bordered={false}
                expandRow={expandRow}
                rowClasses={rowClass}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    </div>
  );
};

PoolsLayout.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PoolsLayout;
