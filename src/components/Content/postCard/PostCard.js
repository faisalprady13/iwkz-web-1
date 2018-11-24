import React, { Component } from "react";
import { wpAPI } from "../../../api/wp-api";
import PostCardBlock from "./PostCardBlock";

class PostCard extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    fetch(wpAPI.posts)
      .then(res => res.json())
      .then(
        results => {
          if(this._isMounted){

              this.setState({
                isLoaded:true,
                posts: results
              });
              //console.log(this.state.posts);
          }
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        errors => {
          if(this._isMounted){
            this.setState({
              errors
            });
          }
        }
      );
  }

  componentWillUnmount(){
    this._isMounted = false;
  }


  render() {
    let post1 = this.state.posts.slice(0, 2).map(function(title, index) {

      //let regex = new RegExp(/<style([^]*?)\/style>/gm);
      //let res = regex.exec(title.content.rendered);
      let date = new Date(title.date);
      let year = date.getFullYear();
      let month = [];
      let datum = date.getDate();

      month[0] = "Januari";
      month[1] = "Februari";
      month[2] = "Maret";
      month[3] = "April";
      month[4] = "Mei";
      month[5] = "Juni";
      month[6] = "Juli";
      month[7] = "Agustus";
      month[8] = "September";
      month[9] = "Oktober";
      month[10] = "November";
      month[11] = "Desember";

      let postDate = `${datum} ${month[date.getMonth()]} ${year}`;

      return (
        <PostCardBlock
          key={index}
          link={title.link}
          thumbImgSrc={title._embedded["wp:featuredmedia"]["0"].source_url}
          author={title._embedded["author"]["0"].name}
          postDatum={postDate}
          statusPost={title._embedded["wp:term"]["0"]["0"].name}
          title={title.title.rendered}
          postHTML={{
            __html: title.content.rendered
              // .replace(regex, "")
              // .replace(/<[^>]+>/gm, "")
              // .split(/\s+/)
              // .slice(0, 20)
              // .join(" ")
              // .concat("...")
          }}
        />
      );
    });

    let post2 = this.state.posts.slice(2, 4).map(function(title, index) {

      //let regex = new RegExp(/<style([^]*?)\/style>/gm);
      //let res = regex.exec(title.content.rendered);
      let date = new Date(title.date);
      let year = date.getFullYear();
      let month = [];
      let datum = date.getDate();

      month[0] = "Januari";
      month[1] = "Februari";
      month[2] = "Maret";
      month[3] = "April";
      month[4] = "Mei";
      month[5] = "Juni";
      month[6] = "Juli";
      month[7] = "Agustus";
      month[8] = "September";
      month[9] = "Oktober";
      month[10] = "November";
      month[11] = "Desember";

      let postDate = `${datum} ${month[date.getMonth()]} ${year}`;

      return (
        <PostCardBlock
          key={index}
          link={title.link}
          thumbImgSrc={title._embedded["wp:featuredmedia"]["0"].source_url}
          author={title._embedded["author"]["0"].name}
          postDatum={postDate}
          statusPost={title._embedded["wp:term"]["0"]["0"].name}
          title={title.title.rendered}
          postHTML={{
            __html: title.content.rendered
              // .replace(regex, "")
              // .replace(/<[^>]+>/gm, "")
              // .split(/\s+/)
              // .slice(0, 2)
              // .join(" ")
              // .concat("...")
          }}
        />
      );
    });

    if(!this.state.isLoaded){
      return <div>LOADINGGGG</div>;
    }

    return (

      <div className="container">
        <p className="is-size-2 is-size-3-mobile"><span className="underlined-text-orange">Berita Terbaru</span></p>
        <div className="columns">{post1}</div>
        <div className="columns" >{post2}</div>
      </div>
    );
  }
}

export default PostCard;
