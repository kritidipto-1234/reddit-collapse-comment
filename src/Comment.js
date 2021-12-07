import React, { useState, useEffect } from "react";
import styles from "./Comment.module.scss";

function Comment(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function collapseComment() {
        setIsCollapsed(true);
    }

    function expandComment() {
        setIsCollapsed(false);
    }

    const { data } = props;
    return (
        <div className={styles.Comment}>
            <div className={styles.authorData}>
                {isCollapsed && (
                    <button type="button" onClick={expandComment}>
                        Expand
                    </button>
                )}
                <img src={data.author.avatar} />
                <span>{data.author.name}</span>
            </div>
            <div
                className={
                    styles.content + ` ` + (isCollapsed ? styles.collapsed : "")
                }
            >
                <div
                    className={styles.collapser}
                    onClick={collapseComment}
                ></div>
                <div className={styles.text}>{data.text}</div>
                {data.replies &&
                    data.replies.length > 0 &&
                    data.replies.map((c, i) => <Comment data={c} key={i} />)}
            </div>
        </div>
    );
}

export default Comment;
