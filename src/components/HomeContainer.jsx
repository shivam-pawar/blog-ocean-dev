import { useCallback } from "react";
import { useHistory } from "react-router-dom";
function HomeContainer() {
  const history = useHistory();

  const handleOnClick = useCallback(() => history.push("/blogs"), [history]);

  return (
    <div>
      <div className="card m-3 blog-post" onClick={handleOnClick}>
        <div className="card-body">
          <h3 className="card-title">Alice in Wonderland, part dos</h3>
          <p>
            'You ought to be ashamed of yourself for asking such a simple
            question,' added the Gryphon; and then they both sat silent and
            looked at poor Alice, who felt ready to sink into the earth. At last
            the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be
            all day about it!' and he went on in these words: 'Yes, we went to
            school in the sea, though you mayn't believe it—' 'I never said I
            didn't!' interrupted Alice. 'You did,' said the Mock Turtle.
          </p>
          <div>
            <p className="card-text">
              <small className="badge badge-secondary">
                Posted on 1st January,2021
              </small>
            </p>
            <div className="float-right">
              <span className="badge badge-primary">story</span>{" "}
              <span className="badge badge-success">blog</span>{" "}
              <span className="badge badge-info">personal</span>{" "}
              <span className="badge badge-warning">Warning</span>{" "}
              <span className="badge badge-danger">Danger</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card m-3 blog-post"
        onClick={useCallback(() => history.push("/blogs_new"), [history])}
      >
        <div className="card-body">
          <h3 className="card-title">Alice in Wonderland, part dos</h3>
          <p>
            'You ought to be ashamed of yourself for asking such a simple
            question,' added the Gryphon; and then they both sat silent and
            looked at poor Alice, who felt ready to sink into the earth. At last
            the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be
            all day about it!' and he went on in these words: 'Yes, we went to
            school in the sea, though you mayn't believe it—' 'I never said I
            didn't!' interrupted Alice. 'You did,' said the Mock Turtle.
          </p>
          <div>
            <p className="card-text">
              <small className="badge badge-secondary">
                Posted on 1st January,2021
              </small>
            </p>
            <div className="float-right">
              <span className="badge badge-primary">story</span>{" "}
              <span className="badge badge-success">blog</span>{" "}
              <span className="badge badge-info">personal</span>{" "}
              <span className="badge badge-warning">Warning</span>{" "}
              <span className="badge badge-danger">Danger</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card m-3 blog-post">
        <div className="card-body">
          <h3 className="card-title">Alice in Wonderland, part dos</h3>
          <p>
            'You ought to be ashamed of yourself for asking such a simple
            question,' added the Gryphon; and then they both sat silent and
            looked at poor Alice, who felt ready to sink into the earth. At last
            the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be
            all day about it!' and he went on in these words: 'Yes, we went to
            school in the sea, though you mayn't believe it—' 'I never said I
            didn't!' interrupted Alice. 'You did,' said the Mock Turtle.
          </p>
          <div>
            <p className="card-text">
              <small className="badge badge-secondary">
                Posted on 1st January,2021
              </small>
            </p>
            <div className="float-right">
              <span className="badge badge-primary">story</span>{" "}
              <span className="badge badge-success">blog</span>{" "}
              <span className="badge badge-info">personal</span>{" "}
              <span className="badge badge-warning">Warning</span>{" "}
              <span className="badge badge-danger">Danger</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card m-3 blog-post">
        <div className="card-body">
          <h3 className="card-title">Alice in Wonderland, part dos</h3>
          <p>
            'You ought to be ashamed of yourself for asking such a simple
            question,' added the Gryphon; and then they both sat silent and
            looked at poor Alice, who felt ready to sink into the earth. At last
            the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be
            all day about it!' and he went on in these words: 'Yes, we went to
            school in the sea, though you mayn't believe it—' 'I never said I
            didn't!' interrupted Alice. 'You did,' said the Mock Turtle.
          </p>
          <div>
            <p className="card-text">
              <small className="badge badge-secondary">
                Posted on 1st January,2021
              </small>
            </p>
            <div className="float-right">
              <span className="badge badge-primary">story</span>{" "}
              <span className="badge badge-success">blog</span>{" "}
              <span className="badge badge-info">personal</span>{" "}
              <span className="badge badge-warning">Warning</span>{" "}
              <span className="badge badge-danger">Danger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
