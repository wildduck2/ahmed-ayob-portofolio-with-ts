import React from 'react';

const Modal = (openModal) => {
    return <div></div>
}


const Moadl = (openModal) => {
    return (

        <button>

            open Modal</button>

    )


}


const App = () => {
    // lots of code here
    const [openModal, setModalState] = setState(false);


    const openModal = () => {
        setModalState(true)
    }

    const closeModal = () => {
        setModalState(false)
    }

    return (
        <div className="layout">
            {/* button should go somewhere here /}
                <button onclick={openModal}>Open Modal</button>
            {/ Modal       */}
            <Modal openModal ? Modal : null />
            <VerySlowComponent />
            <BunchOfStuff />
            <OtherStuffAlsoComplicated />
        </div>
    );
};

export default App;
