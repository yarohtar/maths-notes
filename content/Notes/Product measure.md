Let $E=E_{1}\times E_{2}$ where $(E_{1},\mathcal{E}_{1},\mu_{1})$ and $(E_{2},\mathcal{E}_{2},\mu_{2})$ are $\sigma$-finite [[Notes/Measure]] spaces with [[Notes/Product sigma algebra]] $\mathcal{E}$. 
Then there exists unique measure $\mu$ on $\mathcal{E}$ with:
$$
\mu(A_{1}\times A_{2})=\mu_{1}(A_{1})\mu_{2}(A_{2})
$$
defined by:
$$
\mu(A)=\int_{E_{1}}\left( \int_{E_{2}}1_{A}(x_{1},x_{2})\mu_{2}(dx_{2}) \right)\mu_{1}(x_{1})
$$
