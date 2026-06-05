Fix a $p$-[[Analysis of Boolean Functions/Biased Cube]].
Let $x\in \{ -1, 1\}^{n}$ and $\rho \in[0,1]$.
We say that $y\sim N_{\rho}(x)$ if 
1. $y_{i}=x_{i}$ with probability $\rho$
2. $y_{i}$ is $\mu_{p}$-random with probability $1-\rho$
If $x\sim \mu_{p}$ then $\mathbb{P}(y_{i}=1)=\rho q+(1-\rho)q=q$ so $y\sim \mu_{p}$.
Then we say that $x$ and $y$ are $\rho$-correlated and write $x\sim_{\rho}y$.

The $p$-biased noise operator $T_{\rho}$ is given by the formula:
$$
T_{\rho}f(x) = \mathop{\Large\mathbb{E}}\limits_{y\sim N_{\rho}(x)} f(y)
$$
### Lemma
For every $A\subseteq[n]$ we have
$$
T_{\rho}\phi_{A} =\rho^{\lvert A \rvert }\phi_{A}
$$
#### Proof
$$
\begin{align}
T_{\rho}\phi_{A}(x)  & = \mathop{\Large\mathbb{E}}\limits_{y\sim N_{\rho}(x)} \prod_{i\in A}\phi(y_{i}) \\
 & = \prod_{i\in A}\mathop{\Large\mathbb{E}}\limits_{y\sim N_{\rho}(x)} \phi(y_{i}) \\
 & =\prod_{i\in A}(\rho \phi(x_{i})+(1-\rho)\mathop{\mathbb{E}}\phi) \\
 & = \rho^{\lvert A \rvert } \phi_{A}(x)
\end{align}
$$
### Corollary
$$
\widehat{T_{\rho}f}(A) =\rho^{\lvert A \rvert }\hat{f}(A)
$$
so $T_{\rho}$ is diagonal on the Fourier side and thus self-[[Analysis/Hilbert Space/Adjoint]].
Also 
$$
T_{\rho}T_{\sigma}=T_{\rho \sigma}
$$



