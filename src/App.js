import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
import Comment from "./Comment";
import data from "./data";

function App(props) {
    return <div className={styles.App}>{<Comment data={data} />}</div>;
}

export default App;
