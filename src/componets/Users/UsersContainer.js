import Users from "./Users";
import { connect } from "react-redux";
import {
   follow,
   setCurrentPage,
   setUsers,
   setTotalUsersCount,
   toggleIsFetching,
   unfollow,
} from "../../redux/reducers/users-reducer";
import axios from "axios";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
         )
         .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(100);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
         )
         .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
         });
   };

   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
            />
         </>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   };
};

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId));
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId));
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users));
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPageAC(pageNumber));
//       },
//       setTotalUsersCount: (totalCount) => {
//          dispatch(setUsersTotalCountAC(totalCount));
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching));
//       },
//    };
// };
export default connect(mapStateToProps, {
   follow,
   setCurrentPage,
   setUsers,
   setTotalUsersCount,
   toggleIsFetching,
   unfollow,
})(UsersContainer);
