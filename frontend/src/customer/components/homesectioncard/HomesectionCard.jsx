import React from 'react'

export default function HomesectionCard() {
  return (
    <div className='bg-white rounded-lg h-[15rem] flex flex-col items-center shadow-lg overflow-hidden cursor-pointer mx-3'>
      <div className='h-[13rem] w-[10rem]'>
    <img className='object-cover object-top w-full h-full' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhgSFRISGBISGBEYGBIREhEYGBgSGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQlJSs0NDQxNDQ0NDQ0NDY0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPYAzQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA/EAACAQIEAwUGBAMHBAMAAAABAgADEQQSITEFQVEGImFxkRMygaGxwSNCUtFy4fAHFBaCstLxJGKSohUzQ//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAQEAAgEEAQIHAQAAAAAAAAABAhEDEiExQQQiURMyQmFxgbEU/9oADAMBAAIRAxEAPwDRwiRLwOrxCYl4QEMSBiQCEIQCR8VjadMXdwPAnX0kbi3ERSWwtnbYdPEzAcVxjOSSSTzP9fSRatMfbbp2lwxJAfUciN/Kc/4owt7MzL4lbj5XmCwSfhPUtqGWx8LNpI9erprI3U9Met4fEI6h0dWU81IIjs8h4dxapRfMjkdVv3T5iehdn+0FPEjKe7UG6nn4jqJO1bF5CEJKBCEIBCEDASJFiGAQhCAQhCA8YQMS8AhCcmAkIQgEbxFYIpcnQCOTMdr+IZctIH3tW/hH9ASKmTdUfE8UzuWJ975Lyj/DezdSuM2RsnK1h9ZAwK+0qKv6iPSe0cJwqpTVQNgJlll6dOGM81j8P2Nb2RQkAG9hodbaXmX432NrICyAm35bfSez2kPEAEHSR1WLdON9Pm+tTZWKsCCORj+Bxb0qiup1Uj06T03tb2bp1kLqMtRbkMOfgRPK69MoxUjVTaXxy6mOeFxezcLxYq0kqD8wF/PnJUyH9n+PDUmpE6oxI8jv/XnNfNGVEIQhAhCEAiGKYhgJCEIBCEID0SEIHMSLEgEIQgE8v7T4zPiXPIGw+G89QJnkXGkPtX8z9pWr4rbsxiQKqnIzkahVGt/HoJ6GnbJUOR8PVXlcZWHyN5heyHCnqUXZGyubgH4S8wfZ/EXUNUqZFU5k01fqOQGx1F/GZZeXVjPpjf08cHp+0HukXv4TKcQ7TV2Y06VNQAT+JUJIt1CKLmX2Bw5TDPTuTlB1O+omaq9mBVplcxzMQc250voOXPz8ZWLWaMpiqzn/AO6m+vep5ChA8P5zB9scJkrk20cA/HnPSOEdmfYOajbWACX0FhKPtJhVqVBdQcrGwPMWvY+kmXVVyx6ozvZNKmHxNJmy+zxFk0bVWKllzDkd/nPTZ5/2jqqlTDKPe9pQcDoqdfMv8jPQDNsbuOblxmN1BCF4SzMQhCAGIYsSAkIQgESEID05nU5gJCEIBCEIHNU90+RnmPF1BrP5i/nYT0biNYJTJ/rrPM8SSzsf1GVyrTCNp/ZrWCh6fMMD8CP5T0HE4lFTNubaDxnj/ZLElcXkDWLodOtjPRatSoFDZGcDXKgBY+QvMMu1deNlxiUmPp2dWcByASp0MhcK4iAxAB9mdiQd7xirUbEDMKNNRprWIDcuXxkW9YOKa06bA7uGYBRffbWVX00HEMSMtxMbi3QMajnQXsNTc2J256KZoquFIXvMT9Jhe0OKX2+Rd1XLmAJIqDKwUf8AdZ7675ee0nGdVUzy6cWZqYxq+LV2/M6WH6UBFh9/Mmev3nk/D6OfHooynv07lPdzKAXItyzBp6vOiOPK77lvCJCWUdQnN4XgLeJCEAhCEBCYkIQH5zCEBIQhAIQgTAyHaviln9mDoNz4zK1cZTW5uGPQcvPxidp6t8U4J0BP1lK73v0Gw6mU1trMtTRzD8TdK61l95Te3UcwZ7b2W7QUcRTDKwuRqp3B5gzwVlmu7EoxzAEgg6ESueMs2txZXenslThmYllcrfWy7HxjBwa0wTfzJ3J85UYbimJVcps1uZ0MbxNes4s5sD+Vf3mNdW7Z5c8b4uEpOw1yKx9BfWePUsVUZ2cu2aoSXIZhmvfQ23Gu09D7UJlwzqOaP9J5thprxzs5uW95Gh7IELiFc7AAeVz/ACt8Z6jeeRcKr5ao6Npfz1HztPWaFTMit+pVPqJrGNOXheEJKpbwvEhAWLOYsAgYQgJCEIDsSEIBCEIBOajWBnTMALk2HUzPca4yoBpobtzty85FulscbfDz7tKt8S7D3WNr+I0MrjTsp6i2kucTTVjmY6a73uT4CVWLcFtJWVfKaRVWbv8As8onOdNDMKgPLnPROxpeiuY0wb20JIO0jK9l+HDLK9nov90W17SO+EA1kb/59QBmpkctGB+oEZxfaGnlKojMw3zFRb0vMtx0fh571pQdpkzUqvQIw+U8qptYz0bimJqOCNlO6jn5mYrGcNYMxTUX26S+FinLw5alM4Zu+Bzvp8dp7Bw0fgp/An0nkvDMLUaoLU3OQhjYbAG+hOl9J63gGBpIRmsVBGYEGx6iaRy5JEIQllBOpzCB1CEICxIQgEQwMSA9CF4QCc1KgVSx2AJ9J1KviNb8N+hVx6i0pnlqOj4/HM7u+IxvHeM1Xf3mVOSqxGh2uRqT6SpXEi1iQq8yPpJmPS5v1sflKnE4ViBb+vOVx0vyb2TE4qm2ik+Z5yIlPMdIq0BmAJ36S+4Zw7MRYab/ALS1uopx4XPLR/s/wq7B2Gg5EbnlNkieAjODwwUXttJKrp5zG3b08MJhjqOWQEWIuDyOsiPTCvlUAKVGihRrc32EmswG97d29t7c5HqOGqAqGAAYC4Iv7uuutrk7iRv0tvuYNFTuP6MYxOEtuAVMmN9x95IAuLQnTNUsJle6GzLseYmkwfEGsA4uR+ZQB8tpAxGGy3O4NvlY2+UdoqD1tfr11H7S0ysZZcOGXmLX++p4+kfSoGFwbiVRTSJhsRka/wCU7iWx5Lvu5uT4mPTvHyuIREcEXBuDsRFmzzxOpzCB1Cc3heAQJiGEB68SES8AY6E+coMfXUKQzAefPrp8pd4hrKZhURqrPUY2UZrk72ue6OgAH1POZcnl2/GtxwuvdVmNxALhVNgBq1tlHnINfFXQ20B0A8P3j/FAF7gGtlB63/5kTAoWNgBuN+XUxJNbUz31ac0qJeoiruQAByv/AMz0HhfDggAGtgBmPM9bchy+Eo+CcHJq+0vZRr4mbWmlhK5ZbdnBx9E3fNcMmlpyRHnEbIlXQbtG6g7w6WO3mLfeOst9I2lMDqfFmZj6kyEdzDr/AKh9DO1No9kiMIWNVNdviDzjFNLDZgLbH6idVwTzI8pXVfaDRajW6Gx/nCFmlX1kGrUuSOkhpiqinvXInSNck23J0hXadgMcUNtSp3H3HjNCjhgGBuDsZkj03Ml8NxxQ5W9xt/A9RL4Z67VyfI4Nzqx8/wCtHCIrAi4NwdiOkJu84sIkLwFhEhAcJhEMS8BrEt3fSZbElUDrsC2YLzYkDQeFxNNjPdlHWwYvfc9Tqfh0mHJfqel8XHfH/bI4/DN75N2OptsPAROEizGwF9wD1mjxWDuJV8JwoFVxbVSPQ7feR1dml4dZStLwhCqC+9gJapUlZSJtHVraEyro0ns8bLyOtW85z3+MB8vA1kNgt82t7g6bWvcb7xtnCkDnp63is/gdxGkWdzuacO05J6xvNeEmq7yvrvJtVZVV3hXKuTV62MfpWt+0p8XXyWPIn5TlMUUIIPcaFepfeU4ySLRxIPOSS2l7wttZcKxmU5GPdOxPI/tLqY13Ms+E8UIOR/d5N08D4TTDL1XD8jg39WK/hCE2cJYXiQgdmJCJAZxJ0EhgXFul5KxR2kUHvHxnPn5ev8Wa4ojYlNDKThg/GfyT6mX1faZ7AgjGP0K/cSsbZel5WblOKptlX4zkG7iIjZqh8IWSlFl8TEerYabwxD2sI3TTMYQ7oofeO5j2bxG4+scVIrWUQI2Jc7czHaS2WRMxd/CT7aQIlaU+KFjflLirzlZXHI7SFcl1wLDBaALAXqXY3HI7D0t6yJxrs+lQFqYCVP07K3+0+Mt8EtqaDoi/SPzpmM1p5FzymdseYU3ZGKOCrIbFToQZZYbFcjNVxfglLEWLXWovu1Etmt0I2YeB+FpkeJcMqYdhm7yHaooNiehHI+Eyyw07OLnmXa+VmGBnKJK3DYq2kskqX2lHTLtd8Jx9/wANz3h7pPMdPOWsyaLrLnB8RF1pue8xsp5k2vY+m81wy9Vw8/Br6sf7WcIQmrjdRIQgRcS2p8LSK/Izt3u7eZHpOSLi05svL2+KdOEn7GMQdJR4Y/8AVMeqH6iXNdtPlKOif+oP8DfVZEWq0RrBm6CLw0aFzI2JfLTA5sZKUZKYXmd/MwsVbu/hLCmlozhKVh4yRCHYkHFVuQj2JrBRbmeUg0kLG5gScFT5yU8SmlhaFUwIVcyuxPMyxrNKvFEkEnoZCuTXUmBVSNiFI8iJ3K/glbPQTqgyn/Lt8rSwnVLuPFzx6crBGsRRR0KOAVYWIMdhJVed8Y4c+HqZdSjXKP1HQ+IiYbEm2s3HFcClakabfxK1vdYc/t8ZhVwBb/8AQADdQo18iTMcsdPR4OS5T+Dj8TbZfXcnyE7w2JK1EqOxJRlbmdje20l4bhlNdbXJ3LazrEYZALgWPmZTcdFxtndsKNVXUOpurC4I6TuUvZqoTTZDspBHk1/2+cup0Y3c28nPHoysLCEHOh8jJVk3dKamSSTzuTHn69d/3jKVVBtpeM4h698wAI/T4Tle7OzrEjQ/1rM/TP45/gP1WXKYtW7jAq/6W+x5iVDLlxfgyE+hBMRGSYVz1lT8tMXPw5esnt3mkXh6aNUO9Q3/AMg0H3MmpCYkI07zADMZHp0yT4RvHVrnINoSZZi5J6mTqKWEi0UsLydTXmZAcWNV2jxkLEPJQjVWkDFbSRUa5sIxiEsPOQrU/s5VszU+TC48x/L6TQTJ4B8lRW6EX8tj8prJvx3tp5vysdZb+5YRJ2iEmXt05pLbqOHos6lVNiRbMRe1/CUmI7NVFGZWD23sLNbnpzmrpplE5qVgJjllt28W8J2YQKVGUGx1uCLr0tbl8Oki1azG4KkEbjkfI/vaW/aQqPxFsCTZh1J2PnpI3CsDVd1Z0K0xqbi2YDYAHUgyslroy5cZjurHszRK02YqQXbS/NQNCPC5MuYQnRJqaeZll15WliVNj5GLBxcEdQYqMbrKVTYnAKTe5F9iNwYlOsy9xxqNm5EdZNoVAy2YRXVPOcz3FdisOjizDxvzB6gzPoC2Iy5s2RWAfwNgb+svMe5PcUb/AEMipgwjiw1Zd/jGyzaUgsNNhsPARykpJjT9JJTuLc78pCXWIqBFtzMh0qZJvFALG5kqkkDtEkgjQRESdDYSUOajWErcQbyXWeRmS5kBmmnORMS12t0lhiGCL4yldiTCtOo/pNTgal6ak72t8Rp9pmaFO5Amg4JTLsQT3afLz1Mvhlquf5GHVjP5WdGiW5aSYAqCcYnEhF02lW71HP6V6nc+Qk23KuaTHCJWJxwGg35ASGVqPv3R8/SPU6arsNep3jkvjx/dnlzX9JhMKgscoLDZm1Pw6R+EJeTTG23yIRISUOop2iQYaEeBhM8oCCdFdJXYfGu7FaVGo5UlS9mVcw3GxPyj2IocQAuKSAdClVvmLTm09qZ4/cjqAxNun0kV3vUB5ZW+qyrxvE8Qt86UxfcqzDwtYgxzgNZ6waoy5aYOUa3zW3+0jS3XN6W1BPzn4Dr4we7HWSCl53ToQsZpUpMRI1VrKg8pVpxFi12awOgHICELtnAkV619BOA62uWHhrvBKina0AyQAtryAiswjWKcFcoOpkCqxlfM2mwjdGnHxhSORnaAKNYVkN4ir7Om1S1zbujqZoOy6sMMXY96pqTMjj2ZwxscqqxHw1m2woyYdOlh9NJaMObu6qHM1uSW+LTqcUhp4nU+Znc3xmo83PLqyEIXhLKFiQhAIl4hMIDkIQgW3CgAunMn1ljVawlZwo6W8ZPxLd2Ye67J+WMX20wKVKZOiuSq5x0JAN+ul5VU6mVAlEIVQAAZtZO7eORhWtuWpjnzcbSm4V2brOistJ9RoQpH/sbXkWV08WcnlIXjLIbPTIjlfixZe6QAecmp2WxNrGm5/idP90Udja+/4a33Bqc/gpjpv2aXmxnuKNcU2oZrg6TlgubNa4APrNWvY2oR3qlIeQc/YSWnY7SxrC3QUz92k9FVvPhPbCO2bqCOXhOEqOt+8dPpvPQk7F09c1SobW91aY+oMcPY3Djd6p+Kf7Y6Mmd+Rg83OKqHmTrzPKNVMTU5AX8SfnPSP8J4Tn7T/wAv2EP8J4XktT/yaPw6r/0Y/u88ocRqrub76BT9zHRxck5WVf8ANabqp2PocvaD/MP2kKv2KpnZn+Psz+0dFWnPj92WrYgPTZUCjMCDbx0muqPdUp8gBKmr2MKAujkMNctrZra20Y7yxo1A7K4vYopswIIJGxHI67RMbLpTk5ZljbEuES8Ju88sIQgESESAGJCJAehCECz4Vz85MxR0iwmN812Y/ljNccUGmQeZp/6wftNTw0KEXTYCEJfHwpl7ShiOQFoGo3/b6QhLsq4zk7hfSCnw+cIQh0v5vIfeKo0hCCj2Dfr+Qif3fqzfSEJIQUV8fibzllhCQI1emJn8XQC1Cw/MBp5QhI9rXwbhCElkBCEIBEMIQEiQhA//2Q==" alt="img"  />
      </div>
      <div className='p-4'> 
      <h3 className='text-large font-medium text-gray-900'>Black Top</h3>
      <p className='text-gray-500'>Girls black top</p>
      </div>
    </div>
  )
}
