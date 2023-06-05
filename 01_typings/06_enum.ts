{
    // enum - an enumerable collection of useful values
    enum Boxsize { Small, Medium } // by inference thse are 0, 1

    let c = Boxsize.Medium

    enum Boxsize { Large=2, XLarge}

    c = Boxsize.XLarge

    // remember - there is NO ENUM at runtme
    console.log( c, Boxsize.Small )
}