Let $p\in[0,1]$ and let $\{ -1,1 \}^{n}$ be the $p$-[[Analysis of Boolean Functions/Biased Cube]].
Let $f:\{ 0,1 \}^{n}\to \mathbb{R}$. 
The [[Analysis of Boolean Functions/Discrete Fourier Transform]] is then given by:
$$
\hat{f}(\bullet_{A})=\hat{f}(A) = \mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} f(x) \phi_{A}(x)= \braket{ f | \phi_{A} } 
$$
The following holds
$$
\braket{ f | g } = \braket{ \hat{f} | \hat{g} } 
$$
$$
f(x) = \sum_{A\subseteq[n]} \hat{f}(A)\phi_{A}(x)
$$
but the convolution identity doesn't.

