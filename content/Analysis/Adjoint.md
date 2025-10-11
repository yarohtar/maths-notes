Let $\mathcal{H}$ be a [[XNotes/Hilbert Space]] and $T\in L(\mathcal{H})$ a [[XNotes/Linear Operator]]. Then there exists a unique $T^{*}:\mathcal{H}\to \mathcal{H}$ (sometimes $T^{\dagger}$) such that 
$$
(Tx,y)=(x,T^{*}y)
$$
for all $x,y\in \mathcal{H}$
Moreover, $T^{*}\in L(\mathcal{H})$
If $T$ has a [[XNotes/Matrix of a Linear Operator]] $A$ with respect to some [[XNotes/Orthonormal Basis]], then $T^{*}$ has matrix $\overline{A^{T}}$
### Proposition
For $\mathcal{H}$ a [[XNotes/Hilbert Space]], $S,T\in L(\mathcal{H})$, have:
1. $(\lambda S+\mu T)^{*}=\lambda ^{*}S^{*}+\mu ^{*}T^{*}$
2. $(ST)^{*}=T^{*}S^{*}$
3. $(T^{*})^{*}=T$
4. $\lVert T^{*} \rVert=\lVert T \rVert$
5. $\lVert T^{*}T \rVert=\lVert T \rVert^{2}$




### QM
The inner product in $\mathcal{H}$ allows us to define the adjoint $A^{\dagger}$ of $A$ by $\bra{\phi}A^{\dagger}\ket{\psi}=\bra{\psi}A\ket{\phi}^*$ for all $\ket{\phi},\ket{\psi}\in \mathcal{H}$
### Definition (self-adjoint, Hermetian)
If $A^{\dagger}=A$ then we call $A$ self-adjoint or Hermetian.
#### Properties
- Eigenvalues of a Hermetian operator are real.
- Two eigenvectors with different eigenvalues of a Hermetian operator are orthogonal.
- The set of all eigenvectors of a Hermetian operator forms a complete orthogonal set.
### Properties
$(A+B)^{\dagger}=A^{\dagger}+B^{\dagger}$
$(AB)^{\dagger}=B^{\dagger}A^{\dagger}$
$(A^{\dagger})^{\dagger}=A$

