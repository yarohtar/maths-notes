# General definition
Let $\mathcal{H}$ be a [[Analysis/Hilbert Space/Hilbert Space]]. 
Consider a collection of [[Analysis/Linear Operator]]s $\{ M_{n} \}_{n} \subseteq \mathcal{B(\mathcal{H})}$ with $\sum_{n}M_{n}^{*}M_{n}=\mathbb{1}$
We say $\{ M_{n} \}_{n}$ are quantum measurements if for any state $\ket{\phi}\in \mathcal{H}$:
1. the probability that $n$ occurs as the result of mmt is $p(n) = \braket{ \phi | M_{n}^{*}M_{n} \phi}$
2. the state post mmt is $\frac{M_{n}\ket{\phi}}{\sqrt{ p(n) }}$
## Projective measurement
Quantum measurements $\{ M_{n} \}_{n}$ which are orthogonal projections are called projective mmts
(i.e. they are [[Analysis/Hilbert Space/Hermetian]] and $M_{n}M_{m}=\delta_{mn}M_{n}$).
Now any [[Analysis/Hilbert Space/Hermetian]] operator $M$ can be represented as 
$$
M = \sum_{n} \lambda_{n}M_{n}
$$
where projected spaces of $M_{n}$ correspond to eigenspaces of $M$ with eigenvalue $\lambda_{n}$
This defines the [[Quantum/Observables]]
Note that now the possible mmt results correspond to eigenvalues of the observable $M$
## Positive operator valued measure (POVM)
Consider a mmt $\{ M_{n} \}_{n}\in \mathcal{B}(\mathcal{H})$.
Then we define [[Analysis/Positive semi-definite]] operators:
$$
E_{n} = M_{n}^{*}M_{n}
$$
This family of operators is called a POVM.
We can always recover $M_{n}$ from a POVM by taking roots (as they are positive).

# Part IB/II
Let $\{\psi_n\}$ be a complete orthogonal set of wavefunctions, meaning $(\psi_i,\psi_j)=\delta_{ij}$ and any wavefunction $\psi$ can be written as:
$$\psi = \sum_{n=0}^\infty c_n\psi_n$$
Then it follows that $c_n=(\psi,\psi_n)$. More generally, $c_n={(\psi,\psi_n)\over (\psi_n,\psi_n)}$. 

- Any observable $O$ has associated [[Analysis/Hilbert Space/Hermetian]] operator $\hat O$.
- Hence, for any observable, we can write $\psi$ as a linear combination of eigenfunctions of $\hat O$.
- The outcome of a measurement is always an eigenvalue of $\hat O$.
- After a measurement with outcome $\lambda$, the wavefunction collapses to a linear combination of eigenfunctions with eigenvalue $\lambda$
- The probability of an outcome $\lambda_n$ is $|c_n|^2$ (or the sum of appropriate stuff)
- The expected value of $O$ is $\langle\hat O \rangle_\psi = \int\psi^*\hat O\psi dV$

## Examples
- Position operator is $\hat x=x$
- Momentum operator is $\hat p =-i\hbar {\partial\over \partial x}$
- Energy operator is $\hat H= {\hat p^2\over 2m} +V(\hat x)$
- Angular momentum operator is $\hat L=\hat x\times\hat p=-i\hbar\hat x\times\nabla$ 


[[Algebra/Vector Spaces/Commutator]]

### Composite system
Suppose we have $\mathcal{H}=\mathcal{H}_{1}\otimes \mathcal{H}_{2}$ with basis $\mathcal{B}=\{ \ket{e_{i}}\otimes \ket{f_{j}} \}$
and we want to only measure in the basis $\{ \ket{e_{i}} \}$
We take $\mathcal{H}=\oplus_{i=1}^{m}\mathcal{E}_{i}$
where
$$
\mathcal{E}_{i}=span\{ \ket{e_{i}} \otimes \ket{\phi} : \ket{\phi} \in \mathcal{H}_{2} \}
$$
and take the projective measurements in these subspaces and etc whatever ... 
