Consider transformations of the state $R$ of a system to state $R'$ that conserve probabilities $Prob(\phi\to \psi)=Prob(\phi'\to \psi')$.
### Wigner's Theorem
In QM, these transformations are represented by a linear and unitary operator $\ket{\psi'}=U\ket{\psi}$ with $U^{\dagger}U=I$ (also, by definition $\bra{\psi'}=\bra{\psi}U^{\dagger}$)
(Or an anti linear anti unitary operator, but we'll not consider this possibility in PQM)

These transformations form a group $G$ 
$U$ is a homomorphism from $G$ to linear operators on $\mathcal{H}$ ie for $g_{1}\in G$ we write $U(g_{1})$ for the corresponding operator.
In mathematical terms we study the unitary representations of $G$ on $\mathcal{H}$.

We can equivalently transform operators instead of states:
Let $A:\mathcal{H}\to \mathcal{H}$ with $\bra{\psi}A\ket{\psi}$. After transform we have $\bra{\psi}U^{\dagger}AU\ket{\psi}$ so we could have just sent $A\to A'=U^{\dagger}AU$ whilst leaving the states unchanged.
This is called a similarity transformation
Similarity transformations preserve the spectrum
if $A\ket{a}=a\ket{a}$ then $U^{\dagger}\ket{a}$ is an eigenvector of $A'$ with eigenvalue $a$.

## Continuous transformations
Let $U$ depend smoothly on a parameter $\theta \in \mathbb{R}$ with $U(\theta=0)=id_{\mathcal{H}}$
For $\delta \theta\ll 1$ we expand $U(\delta \theta)=id_{H}-i\delta \theta T+O(\delta \theta^2)$
$T$ is called the generator of the transformation ("$-i$" factor is convention)
$T$ is Hermetian

Generators can be observables!

From $U(a+b)=U(a)U(b)$ we can derive:
$U(\theta)=\lim_{ N \to \infty }\left( 1-i \frac{\theta}{N}T \right)^N=e^{-i\theta T}$

## Translations
$U(a)$ is a translation by vector $a\in \mathbb{R}^{3}$
For infinitesimal translation $\delta a$:
$U(\delta a)=1-\frac{i}{\hbar}\alpha \cdot P+O(\delta a^{2})$
and therefore $U(a)=e^{-ia\cdot P/\hbar}$
By definition, $\frac{P}{\hbar}$ are generators of translations