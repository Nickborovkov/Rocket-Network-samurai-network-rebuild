import styles from "./paginator.module.css";
import React, {memo, useState} from "react";
import { BiFirstPage } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
import cn from 'classnames'

const Paginator = memo(({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const pagesCount =  Math.ceil(totalItemsCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const [portionCount, setPortionCount] = useState(1)


    const leftPortionBorder = (portionSize * portionCount) - portionSize + 1
    const rightPortionBorder = portionSize * portionCount
    const stopForRightBorder = Math.ceil(pagesCount / portionSize)

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
                return <div key={p}
                            className={cn(styles.item, currentPage === p && styles.selectedItem)}
                            onClick={() => {onPageChanged(p)}}>
                    {p}</div>
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
})

export default Paginator