import styled from 'styled-components';
const WrapMain = styled.div`
    width: 100%;
    height: 100%;
    background: url(${(props) => props.backGround});
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: contain;

    .wrap-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        .header-menu {
            margin-top: 18px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 47%;
            .stripe-menu {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .hover-content {
                    position: absolute;
                    top: 80px;
                    left: ${(props => props.xOffset)};
                    transition: left 1s;
                    width: 560px;
                    height: 80px;
                    color: #102a42;
                    background-color: #fff;
                    box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
                    
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    padding: 20px 30px;
                    & :after {
                        content: "";
                        position: absolute;
                        bottom: 100%;
                        left: 50%;
                        margin-left: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent transparent white transparent;
                    }

                    .wrap-icon {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        .wrap-content-icon {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            .icon-menu {
                                padding-right: 12px;
                            }
                        }
                    }
                }

                .btn-menu {
                    cursor: pointer;
                    color: #fff;
                    width: 180px;
                    height: 45px;
                    background-color: transparent;
                    appearance: none;
                    border: none;
                    font-size: 18px;
                }
            }
        }
        .btn-style {
            background-color: #222222;
            width: fit-content;
            padding: 5px 10px;
            height: 30px;
            color: #fff;
            border-radius: 4px;
            border: 2px solid #222222;
            font-size: 14px;
            cursor: pointer;
            :hover {
                background-color: #617D99;
            }
        }
        .wrap-main-content {
            
            width: 47%;
            display: grid;
            grid-template-columns: 1fr 330px;
            grid-column-gap: 180px;
            .main-title {
                
                padding-top: 39%;
                .title {
                    font-size: 88px;
                    font-weight: 700;
                    line-height: 88px;
                    color: #102a42;
                }
                .detail {
                    color: #617d98;
                    font-size: 20px;
                    line-height: 36px;
                    padding: 20px 0 15px 0;
                }
            }
            .image-style {
                padding-top: 54%;
            }
        }
    }
`;
export {WrapMain}