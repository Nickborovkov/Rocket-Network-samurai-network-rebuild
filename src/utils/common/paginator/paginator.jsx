import styles from "./paginator.module.css";
import React, {useState} from "react";
import { BiFirstPage } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount =  Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let [portionCount, setPortionCount] = useState(1)
    let leftPortionBorder = (portionSize * portionCount) - portionSize + 1
    let rightPortionBorder = portionSize * portionCount
    let stopForRightBorder = Math.ceil(pagesCount / portionSize)

    return <div className={styles.items}>
        {
            leftPortionBorder > 1 &&
                <div>
                    <button className={styles.paginationButtons}
                            onClick={()=>{setPortionCount(1)}}><BiFirstPage/></button>
                    <button className={styles.paginationButtons}
                            onClick={()=>{setPortionCount(portionCount-1)}}><BsArrowLeftShort/></button>
                </div>
        }

        {
            pages.filter(p => p >= leftPortionBorder && p <= rightPortionBorder).map(p => {
                return <div className={styles.item} >
                        <div className={currentPage === p && styles.selectedItem}
                             onClick={() => {onPageChanged(p)}}>
                            {p}
                        </div>
            </div>
            })
        }
        {
            rightPortionBorder < pagesCount &&
                <div>
                    <button className={styles.paginationButtons}
                            onClick={()=>{setPortionCount(portionCount+1)}}><BsArrowRightShort/></button>
                    <button className={styles.paginationButtons}
                            onClick={()=>{setPortionCount(stopForRightBorder)}}><BiLastPage/></button>
                </div>

        }
    </div>
}

export default Paginator