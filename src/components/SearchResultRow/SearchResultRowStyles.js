import styled from 'styled-components';

export const StyledSearchResultRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FFF;
  

  &.alternate-background{
    background-color: #F8F9F9;
  }

  .profile-image{
    margin: 0;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    overflow: hidden;
    margin: 12px 6px 12px 12px;

    .img{
      width: 48px;
      height: 48px;
    }
  }
  
  .content-area{
    flex: 1;
    display: flex:
    flex-direction: column;
    margin: 12px 12px 5px 6px;

    .screen-name-container{
      padding-bottom: 10px;

      a.screen-name-link{
        color: black;
        text-decoration: none;
        font-weight: bold;
      }
    }

    .text-container{
      padding-bottom: 10px;

      span.text{
        margin-right: 10px;
      }

      a.tweet-link{
        color: #3C7DB7;
      }
    }

    .hashtags-container{
      
    }
  }
`;
