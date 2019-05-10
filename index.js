let entryNumber = 0;

document.getElementById('add-button').addEventListener('click', function(){
    let inputTextName = document.getElementById('text-box-name').value;
    let inputTextAmounts = document.getElementById('text-box-amount').value;
    let element = document.createElement("div");
    element.innerHTML = `
    <div id="${entryNumber}" class="inputed-expense">
    <div>
        <span>${inputTextName}</span>
        <span>${inputTextAmounts}</span>
    </div>

    <div>
            <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3445 41.0136C10.3445 41.0136 10.9999 44 14.3733 44H29.6267C33 44 33.6554 41.0136 33.6554 41.0136L36.6667 11.7334H7.33335L10.3445 41.0136ZM27.8667 16.1335C27.8667 15.3234 28.5232 14.6668 29.3333 14.6668C30.1434 14.6668 30.8001 15.3234 30.8001 16.1335L29.3333 38.1335C29.3333 38.9436 28.6767 39.6001 27.8667 39.6001C27.0568 39.6001 26.4001 38.9434 26.4001 38.1335L27.8667 16.1335ZM20.5334 16.1335C20.5334 15.3234 21.1901 14.6668 22 14.6668C22.8101 14.6668 23.4666 15.3234 23.4666 16.1335V38.1335C23.4666 38.9436 22.8101 39.6001 22 39.6001C21.1899 39.6001 20.5334 38.9434 20.5334 38.1335V16.1335ZM14.6667 14.6667C15.4768 14.6667 16.1333 15.3232 16.1333 16.1333L17.6001 38.1333C17.6001 38.9434 16.9434 39.5999 16.1333 39.5999C15.3234 39.5999 14.6667 38.9432 14.6667 38.1333L13.2 16.1335C13.2 15.3234 13.8567 14.6667 14.6667 14.6667ZM35.7866 5.86899H29.3333V2.93343C29.3333 0.708324 28.6137 0 26.4001 0H17.6C15.5695 0 14.6667 0.983492 14.6667 2.93343V5.86916H8.21343C6.91642 5.86916 5.86671 6.85363 5.86671 8.07017C5.86671 9.28688 6.91642 10.2714 8.21343 10.2714H35.7866C37.0836 10.2714 38.1333 9.28688 38.1333 8.07017C38.1333 6.85363 37.0836 5.86899 35.7866 5.86899ZM26.4001 5.86899H17.6001L17.6003 2.93327H26.4002V5.86899H26.4001Z" fill="#54D2E5"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="44" height="44" fill="white"/>
                </clipPath>
                </defs>
                </svg>
    </div>

 </div>
 `
    console.log(element);
document.getElementById('expense-wrapper').appendChild(element);
entryNumber += 1
});











